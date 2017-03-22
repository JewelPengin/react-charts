import React, { Component } from 'react'
import _ from 'lodash'
import { ResizableBox } from 'react-resizable'
//
import { Chart, Scale, Axis, Stack } from '../src'
//
// import CodeHighlight from './components/codeHighlight.js'

class Line extends Component {
  constructor () {
    super()
    this.state = {
      data: makeData()
    }
  }
  render () {
    const {
      data
    } = this.state
    return (
      <div>
        <button
          onClick={() => this.setState({
            data: makeData()
          })}
        >
          Randomize Data
        </button>

        <br />
        <br />

        {_.range(1).map((d, i) => (
          <ResizableBox
            key={i}
            width={500}
            height={300}
          >
            <Chart
              data={data}
            >
              {/* Scales */}
              <Scale
                primary
                id='x'
                type='time'
              />
              <Scale
                id='y'
                type='log'
              />
              {/* Axes */}
              <Axis
                scaleID='x'
                position='bottom'
              />
              <Axis
                scaleID='y'
                position='left'
              />
              {/* Stack */}
              <Stack
                type='bar'
              />
            </Chart>
          </ResizableBox>
        ))}

        <br />
        <br />
      </div>
    )
  }
}

export default () => <Line />

function makeData () {
  return _.map(_.range(Math.max(Math.round((Math.random() * 1)), 1)), d => makeSeries())
}

function makeSeries () {
  const startDate = new Date()
  // const length = Math.round(Math.random() * 30)
  const length = 30
  const max = 100
  // const max = Math.random() > 0.5 ? 100000 : 10
  const multiplier = 10
  // const multiplier = Math.round((Math.random() * 10) + Math.round(Math.random() * 50))
  return _.map(_.range(length), d => ({
    // x: d * multiplier,
    x: new Date().setMinutes(startDate.getMinutes() + (30 * d)),
    y: Math.round(Math.random() * (max) + Math.round(Math.random() * 50)),
    r: Math.round(Math.random() * 10)
  }))
}
