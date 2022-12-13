import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Muhammad", surname: "Khamraev" },
        { id: 2, name: "Azam", surname: "Rakhmatov" },
        { id: 3, name: "Asadbek", surname: "Botayev" },
      ],
      selectData: {},
      showSelectInput: false,
      newNameValue: "",
      newSurnameValue: "",
      restoreData: [],
    };
  }
  render() {
    const onDelete = (id) => {
      this.setState({
        data: this.state.data.filter((value) => {
          return value.id !== id;
        }),
      });
    };

    const onSave = () => {
      this.setState({
        data: this.state.data.map((value) => {
          return value.id === this.state.selectData.id
            ? this.state.selectData
            : value;
        }),
      });
    };
    const onAdd = () => {
      if (
        this.state.newNameValue.length === 0 ||
        this.state.newSurnameValue.length === 0
      ) {
        return;
      }

      this.setState({
        data: [
          ...this.state.data,
          {
            id: this.state.data.length + 1,
            name: this.state.newNameValue,
            surname: this.state.newSurnameValue,
          },
        ],
        restoreData: [
          ...this.state.data,
          ...this.state.data,
          {
            id: this.state.data.length + 1,
            name: this.state.newNameValue,
            surname: this.state.newSurnameValue,
          },
        ],
      });
    };
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>
                    {this.state.showSelectInput &&
                    value.id === this.state.selectData.id ? (
                      <input
                        value={this.state.selectData.name}
                        onChange={(e) => {
                          this.setState({
                            selectData: {
                              id: this.state.selectData.id,
                              name: e.target.value,
                              surname: this.state.selectData.surname,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {this.state.showSelectInput &&
                    value.id === this.state.selectData.id ? (
                      <input
                        value={this.state.selectData.surname}
                        onChange={(e) => {
                          this.setState({
                            selectData: {
                              id: this.state.selectData.id,
                              name: this.state.selectData.name,
                              surname: e.target.value,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.surname
                    )}
                  </td>
                  <td>
                    {value.id === this.state.selectData.id ? (
                      <button
                        onClick={() => {
                          onSave();
                          this.setState({
                            showSelectInput: false,
                            selectData: {},
                          });
                        }}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.setState({
                            selectData: value,
                            showSelectInput: true,
                          });
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => {
                        onDelete(value.id);
                        this.setState({
                          restoreData: [value],
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          {this.state.data.length === 0 ? (
            <button
              onClick={() => {
                this.setState({ data: [...this.state.restoreData] });
              }}
            >
              Restore
            </button>
          ) : (
            ""
          )}

          <input
            value={this.state.newNameValue}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ newNameValue: e.target.value });
            }}
            placeholder="Name"
          />
          <input
            value={this.state.newSurnameValue}
            onChange={(e) => {
              this.setState({ newSurnameValue: e.target.value });
            }}
            placeholder="Surname"
          />
          <button onClick={onAdd}>Add</button>
        </div>
      </div>
    );
  }
}
