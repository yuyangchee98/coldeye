import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cagr: 0,
      dy: 0,
      per: 0,
      profitMargin: 0,
      roe: 0,
      cashflow: 0,
      cagrScore: 0,
      dyScore: 0,
      perScore: 0,
      part1TotalScore: 0,
      profitMarginScore: 0,
      roeScore: 0,
      cashFlowScore: 0,
      part2TotalScore: 0,
    }
  }

  /* Form handling functions */

  handleCAGR(value) {
    this.setState({cagr: parseInt(value)}, ()=>this.calcCagrScore());
  }

  handleDY(value) {
    this.setState({dy: parseInt(value)}, ()=>this.calcDyScore());
  }

  handlePER(value) {
    this.setState({per: parseInt(value)}, ()=>this.calcPERScore());
  }

  handleProfitMargin(value) {
    this.setState({profitMargin: parseInt(value)}, ()=>this.calcProfitMarginScore());
  }

  handleROE(value) {
    this.setState({roe: parseInt(value)}, ()=>this.calcROEScore());
  }

  handleCashFlow(value) {
    this.setState({cashflow: parseInt(value)}, ()=>this.calcCashFlowScore());
  }

  /* Form handling functions */

  /* Individual score calculations */

  calcCagrScore(){
    console.log(this.state.cagr)
    if(this.state.cagr <= 5 && this.state.cagr >= 1){
      this.setState({cagrScore: 20})
    }
    else if (this.state.cagr <= 9 && this.state.cagr >= 6){
      this.setState({cagrScore: 30})
    }
    else if (this.state.cagr <= 14 && this.state.cagr >= 10){
      this.setState({cagrScore: 40})
    }
    else if (this.state.cagr >= 15){
      this.setState({cagrScore: 50})
    }
  }

  calcDyScore(){
    if(this.state.dy <= 2 && this.state.dy >= 1){
      this.setState({dyScore: 5})
    }
    else if (this.state.dy <= 4 && this.state.dy >= 3){
      this.setState({dyScore: 10})
    }
    else if (this.state.dy <= 6 && this.state.dy >=5){
      this.setState({dyScore: 15})
    }
    else if (this.state.dy >= 7){
      this.setState({dyScore: 20})
    }
  }

  calcPERScore(){
    if(this.state.cagr <= 9){
      this.setState({perScore: 30})
    }
    else if (this.state.cagr <= 10 && this.state.cagr >= 15){
      this.setState({perScore: 20})
    }
    else if (this.state.cagr <= 16 && this.state.cagr >= 24){
      this.setState({perScore: 10})
    }
    else if (this.state.cagr >= 25){
      this.setState({perScore: 5})
    }
  }

  calcProfitMarginScore(){
    if(this.state.profitMargin <= 5 && this.state.profitMargin >= 1){
      this.setState({profitMarginScore: 5})
    }
    else if (this.state.profitMargin <= 10 && this.state.profitMargin >= 6){
      this.setState({profitMarginScore: 10})
    }
    else if (this.state.profitMargin <= 15 && this.state.profitMargin >=11){
      this.setState({profitMarginScore: 15})
    }
    else if (this.state.profitMargin >= 16){
      this.setState({profitMarginScore: 20})
    }
  }

  calcROEScore(){
    if(this.state.roe <= 5 && this.state.roe >= 1){
      this.setState({roeScore: 10})
    }
    else if (this.state.roe <= 10 && this.state.roe >= 6){
      this.setState({roeScore: 20})
    }
    else if (this.state.roe <= 15 && this.state.roe >=11){
      this.setState({roeScore: 30})
    }
    else if (this.state.roe >= 16){
      this.setState({roeScore: 40})
    }
  }

  calcCashFlowScore(){
    if(this.state.cashflow == 1){
      this.setState({cashFlowScore: 1})
    }
    else if (this.state.cashflow == 2){
      this.setState({cashFlowScore: 20})
    }
    else if (this.state.cashflow == 3){
      this.setState({cashFlowScore: 30})
    }
    else if (this.state.cashflow == 4){
      this.setState({cashFlowScore: 40})
    }
  }

  /* Individual score calculations */



  /* Total score calculations */

  totalPart1Scores(){
    this.setState({part1TotalScore: this.state.cagrScore + this.state.dyScore + this.state.perScore});
  }

  totalPart2Scores(){
    this.setState({part2TotalScore: this.state.profitMarginScore + this.state.roeScore + this.state.cashFlowScore});
  }

  /* Total score calculations */



  render() { 
    return (
      <div className="App">
          <div>
          <h1>Part 1: 创富</h1>
            <p>CAGR 
              <input value={this.state.cagr} type="number" onChange={e => this.handleCAGR(e.target.value)} />
            </p>

            <p>D/Y:
              <input value={this.state.dy} type="number" onChange={e => this.handleDY(e.target.value)} />
            </p>

            <p>PER
              <input value={this.state.per} type="number" onChange={e => this.handlePER(e.target.value)} />
            </p>

            <button onClick={() => this.totalPart1Scores()}>
              Calculate part 1 score
            </button>

          <h1>Part 2: 保富</h1>

            <p>Profit Margin 
              <input value={this.state.profitMargin} type="number" onChange={e => this.handleProfitMargin(e.target.value)} />
            </p>

            <p>ROE
              <input value={this.state.roe} type="number" onChange={e => this.handleROE(e.target.value)} />
            </p>
          
            <p>Cash flow:
              <select value={this.state.cashFlow} onChange={e => this.handleCashFlow(e.target.value)}>
                <option value="0">---Select---</option>
                <option value="1">loss with negative cash flow</option>
                <option value="2">loss with positive cash flow</option>
                <option value="3">profit with negative cash flow</option>
                <option value="4">profit with positive cash flow</option>
              </select>
            </p>

            <button onClick={() => this.totalPart2Scores()}>
              Calculate part 2 score
            </button>
          </div>

          <br />

          <div>
            <h1> Results:</h1>
              <p>Part 1 score: {this.state.part1TotalScore} / 100</p>
              <p>Part 2 scrore: {this.state.part2TotalScore} / 100</p>
          </div> 
      </div>
    ); 
  }
}

export default App;