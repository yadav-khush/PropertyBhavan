import React from 'react'
import styles from './Features.module.css'

const right = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 21.3q-1.925 0-3.625-.725t-2.962-1.988q-1.263-1.262-1.988-2.962Q2.7 13.925 2.7 12t.725-3.625q.725-1.7 1.988-2.963Q6.675 4.15 8.375 3.425 10.075 2.7 12 2.7q1.575 0 2.975.475 1.4.475 2.575 1.35L16.525 5.55q-.95-.675-2.1-1.063Q13.275 4.1 12 4.1q-3.3 0-5.6 2.3T4.1 12q0 3.3 2.3 5.6t5.6 2.3q3.3 0 5.6-2.3t2.3-5.6q0-.55-.075-1.088-.075-.537-.225-1.062l1.1-1.125q.3.775.45 1.587.15.813.15 1.688 0 1.925-.725 3.625t-1.988 2.962q-1.262 1.263-2.95 1.988Q13.95 21.3 12 21.3Zm-1.4-5.15-3.8-3.8 1-1 2.8 2.825 9.7-9.725 1 1Z" /></svg>
export default function Features({ data, myref }) {
    return (
        <div ref={myref} className={styles.features}>
            <h2 className='flex md:justify-start justify-center text-3xl mt-16 mb-6 text-blue-900 font-semibold'>Features &#38; Amenities</h2>
            <div className={styles.features_inner}>
                {
                    data?.amenities?.map((tag,i) => {
                        return (
                            <div key={i} className={styles.featues_container}>
                                {right}
                                <h3 className={styles.features_line}>
                                    {tag}
                                </h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
