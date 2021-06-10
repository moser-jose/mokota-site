// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data=[
    {
      "data": [
        {
          "x": "plane",
          "y": 33
        },
        {
          "x": "helicopter",
          "y": 279
        },
        {
          "x": "boat",
          "y": 294
        },
        {
          "x": "train",
          "y": 169
        },
        {
          "x": "subway",
          "y": 227
        },
        {
          "x": "bus",
          "y": 148
        },
        {
          "x": "car",
          "y": 30
        },
        {
          "x": "moto",
          "y": 214
        },
        {
          "x": "bicycle",
          "y": 21
        },
        {
          "x": "horse",
          "y": 95
        },
        {
          "x": "skateboard",
          "y": 4
        },
        {
          "x": "others",
          "y": 300
        }
      ]
    }
    
  ]
const LineChart = () => (
    <div className="line">
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        lineWidth={5}
        pointSize={12}
        pointColor={"#373d4ee8"}
        pointLabelYOffset={-12}
        areaBlendMode="darken"
        debugSlices={true}
        enableCrosshair={false}
        useMesh={true}
        motionConfig="default"
    />
    <h1>Inscrições Mensais</h1>
    </div>
)

export default LineChart