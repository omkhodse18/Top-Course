import React from 'react'

function Filter({filterData}) {

    // let filterData = props.filterData;

    return (
        <div>
            {
                filterData.map((category) => <button key={category.id}>{category.title}</button>)
            }
        </div>
    )
}

export default Filter
