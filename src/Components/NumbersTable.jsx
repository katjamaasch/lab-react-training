import React, { Component } from 'react';

class NumbersTable extends Component {
  render() {
    let numbers = Array.from(Array(this.props.limit + 1).keys());
    console.log(numbers);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {numbers.map((element) => {
                  console.log(element);
                  return (
                    element !== 0 && (
                      <td className="carouselTableCell" style={{ backgroundColor: !(element % 2) && 'red' }}>
                        {element}
                      </td>
                    )
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NumbersTable;
