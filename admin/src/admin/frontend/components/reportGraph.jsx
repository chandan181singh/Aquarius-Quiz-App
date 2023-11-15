import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

export default function ReportGraph(){
    const data = [
        {
          name: 'Page A',
          marks: 40,
          test: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          marks: 30,
          test: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          marks: 20,
          test: 19,
          amt: 22,
        },
        {
          name: 'Page D',
          marks: 27,
          test: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          marks: 18,
          test: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          marks: 23,
          test: 38,
          amt: 25,
        },
        {
          name: 'Page G',
          marks: 34,
          test: 43,
          amt: 21,
        },
      ];
     

    return (
      <main className='main-container'>
        <div className='main-title'>
            <h3>Reports Graphs</h3>
        </div>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="test" fill="#8884d8" />
                <Bar dataKey="marks" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="test" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
            </div>
       </main>
    )
}