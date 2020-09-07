Refactor the code below using react hooks in as little lines. Create any custom hooks when applicable. Best case: 10 lines of code
class App extends React.Component {
              state = {
                value: localStorage.getItem("info") || ""
              };

              componentDidUpdate() {
                localStorage.setItem("info", this.state.value);
              }

              onChange = event => {
                this.setState({ value: event.target.value });
              };

              render() {
                const { value } = this.state;
                return (
                  <div>
                    <input value={value} type="text" onChange={this.onChange} />
                    <p>{value}</p>
                  </div>
                );
              }
            }