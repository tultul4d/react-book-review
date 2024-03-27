

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredReadApplication } from '../../utility/readlocalstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
    const [appliedReads, setAppliedReads] = useState([]);
  const reads = useLoaderData();
  useEffect(() =>{
      const storedReadIds = getStoredReadApplication();
       if(reads.length > 0){
          const readApplied = reads.filter(read => storedReadIds.includes(read.bookId))
          // console.log(readApplied)
          setAppliedReads(readApplied);
       }
  }, [])
  return (
    <BarChart
      width={1100}
      height={300}
      data={appliedReads}
      margin={{
        top: 20,
        right: 40,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {appliedReads.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}


