import React, { Component } from "react";

class QiitaButton extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <p>
            <div className="col">

              <button type="button" id="btn-qiita" className="col btn btn-outline-primary btn-block" onClick={this.props.onClickQiitaButton}>request</button>
              <ul>
                {this.props.items.map( (item, i) => { return <li key={i}>{item.title}</li> } )}
              </ul>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default QiitaButton;
