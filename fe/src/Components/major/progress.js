import React from 'react';
import { linearGradientDef } from '@nivo/core';
import { ResponsivePie } from '@nivo/pie';

const progress = (props) => {

    const data =[
        {
          "id": props.fn,
          "label": props.fn,
          "value": props.one,
          "color": "hsl(120, 100%, 30%)"
        },
        {
          "id": props.sn,
          "label": props.sn,
          "value": props.two,
          "color": "hsl(0, 0%, 75%)"
        },
        {
          "id": props.tn,
          "label": props.tn,
          "value": props.three,
          "color": "hsl(0, 0%, 75%)"
        }
      ]
    return (
        <div style={{height:"310px" ,width:"310px"}}>
        <ResponsivePie
         data={data}
         keys={[props.fn,props.sn,props.tn]}
         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
         innerRadius={0.65}
         padAngle={2}
         cornerRadius={3}
         activeOuterRadiusOffset={8}
         borderWidth={1}
         borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
         arcLinkLabelsSkipAngle={10}
         arcLinkLabelsTextColor="#333333"
         arcLinkLabelsThickness={0.4}
         arcLinkLabelsColor={{ from: 'color' }}
          enableArcLabels={false}
          enableArcLinkLabels={false}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
         defs={[
             linearGradientDef('gradientA', [
                 { offset: 0, color: '#f2f2f2' },
                 { offset: 100, color: '#bfbfbf' },
             ]),
            
            {
                id: 'gradientQ',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: props.light },
                    { offset: 100, color: props.dark },
                ],
            },
            {
              id: 'gradientD',
              type: 'linearGradient',
              colors: [
                  { offset: 0, color: 'red' },
                  { offset: 100, color: 'green' },
              ],
          },
        ]}
         fill={[
             // match using object query
             { match: { id: props.fn }, id: 'gradientQ' },
             // match using function
             { match: d => d.id === 'vue', id: 'gradientB' },
             // match all, will only affect 'elm', because once a rule match,
            // others are skipped, so now it acts as a fallback
             { match:'*', id: 'gradientA' },
         ]}
         
         legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 80,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 9,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
         />
        </div>
    )
}

export default progress
