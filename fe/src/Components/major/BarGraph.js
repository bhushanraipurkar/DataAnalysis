import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, defs, linearGradient, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function BarGraph(props) {


  const data = [
    {
      name: props.name1,
      count: props.Environmental,

    },
    {
      name: props.name2,
      count: props.Industries,

    },
    {
      name: props.name3,
      count: props.Economic,

    },
    {
      name: props.name4,
      count: props.Political,

    },
    {
      name: props.name5,
      count: props.Technological,

    },
    {
      name: props.name6,
      count: props.nan,

    },
    {
      name: props.name7,
      count: props.Organization,

    },
    {
      name: props.name8,
      count: props.Healthcare,

    },
    {
      name: props.name9,
      count: props.Social,

    },
    {
      name: props.name10,
      count: props.Lifestyles,

    },
  ];


  return (
    <div>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#248f24" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#99e699" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00e64d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff4d4d" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey='name' />
          <YAxis type="number" domain={[0, 400]} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="count" stackId="1" stroke="#248f24" fillOpacity={1} fill="url(#colorUv)" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>

  )
}

export default BarGraph
