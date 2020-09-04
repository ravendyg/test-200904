import React, {useState, ChangeEvent} from 'react';
import './App.css';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import InputMask from "react-input-mask";
import {
  getExampleNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json'


const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const countriesMap = countries.getNames('en');
const countriesList = Object.keys(countriesMap).map(key => ({
  key,
  val: countriesMap[key],
}));
const notCompletedNumberRegexp = /_/;
const isNumberCompleted = (num: string) => !notCompletedNumberRegexp.test(num);

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

const App: React.FC<{}> = () => {
  const [inputDisabled, setInputDisabled] = useState(true);
  const [phone, setPhone] = useState('');
  const [valid, setValid] = useState(false);
  const [mask, setMask] = useState('');
  const [showImpossible, setShowImpossible] = useState(false);

  const onFinish = () => {
    setInputDisabled(true);
    setPhone('');
    setValid(false);
    setMask('');
    setShowImpossible(false);
    alert(`Wait a call to ${phone}`)
  };

  const onCountryChange = (value: string) => {
    const phoneNumber = getExampleNumber(value as any, examples);
    if (phoneNumber) {
      const examplePhone = phoneNumber.formatInternational();
      console.log(examplePhone)
      const [code, rest] = examplePhone.split(/\s(.+)/);
      const newMask = code.replace(/9/, '\\9') + ' ' + rest.replace(/[0-8]/g, '9');
      setMask(newMask);
      setPhone(code);
      console.log(code, newMask)
    }

    if (inputDisabled && value) {
      setInputDisabled(false);
    }
  };

  const onPhoneChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {value} = ev.target;
    const numberCompleted = isNumberCompleted(value);
    const num = parsePhoneNumberFromString(value);
    setShowImpossible(numberCompleted && !num?.isValid());
    setValid(num?.isValid() || false);
    setPhone(value);
  };

  return <div className='App'>
    <Form
      {...layout}
      onFinish={onFinish}
    >
      <Form.Item
        label='Country'
      >
        <Select
          onChange={onCountryChange}
        >
          {countriesList.map(({key, val}) => <Select.Option
            key={key}
            value={key}
          >{val}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item
        label='Phone'
        help={showImpossible ? 'Entered number is correct but cannot exist' : ''}
      >
        <InputMask
          disabled={inputDisabled}
          value={phone}
          onChange={onPhoneChange}
          mask={mask}
        >
          {(props: any) => <Input
            disabled={inputDisabled}
            value={phone}
          />}
        </InputMask>
      </Form.Item>

      <Button
        type='primary'
        htmlType='submit'
        disabled={!valid}
      >
        Submit
      </Button>
    </Form>
  </div>;
};

export default App;
