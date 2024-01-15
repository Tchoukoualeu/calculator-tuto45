import "./Calc.css"

export const Calc = () => {
  return (
    <div id="container">
      <div id="my-display"></div>
      <div id="display">0</div>

      <div>
        <div id="row-wise">
          <button id="percentage" className="large btn btn-dark btn-space">
            %
          </button>
          <button id="clear" className="large btn btn-dark btn-space">
            AC
          </button>
        </div>

        <div id="row-wise">
          <button id="seven" className="btn btn-secondary btn-space">
            7
          </button>
          <button id="eight" className="btn btn-secondary btn-space">
            8
          </button>
          <button id="nine" className="btn btn-secondary btn-space">
            9
          </button>
          <button id="divide" className="btn btn-dark btn-space">
            ÷
          </button>
        </div>

        <div id="row-wise">
          <button id="four" className="btn btn-secondary btn-space">
            4
          </button>
          <button id="five" className="btn btn-secondary btn-space">
            5
          </button>
          <button id="six" className="btn btn-secondary btn-space">
            6
          </button>
          <button id="multiply" className="btn btn-dark btn-space">
            x
          </button>
        </div>

        <div id="row-wise">
          <button id="one" className="btn btn-secondary btn-space">
            1
          </button>
          <button id="two" className="btn btn-secondary btn-space">
            2
          </button>
          <button id="three" className="btn btn-secondary btn-space">
            3
          </button>
          <button id="subtract" className="btn btn-dark btn-space">
            -
          </button>
        </div>

        <div id="row-wise">
          <button id="zero" className="btn btn-secondary btn-space">
            0
          </button>
          <button id="decimal" className="btn btn-secondary btn-space">
            .
          </button>
          <button id="equals" className="btn btn-success btn-space">
            =
          </button>
          <button id="add" className="btn btn-dark btn-space">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
