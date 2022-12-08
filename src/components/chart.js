import {Line} from 'react-chartjs-2'

function Chart({data, legendPosition}){
    return(
        <div>
            <Line
                data={data}
                options={{
                    legend:{
                        display:true,
                        position:{legendPosition}
                    }
                }}
            />
        </div>
    )
}

export default Chart