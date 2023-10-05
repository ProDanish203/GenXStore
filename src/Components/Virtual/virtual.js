import React from 'react'
import css from "./virtual.css"
import shade from "../../Assets/img/shade.png"
import ReactCompareImage from 'react-compare-image';
import Before from "../../Assets/img/before.png"
import After from "../../Assets/img/after.png"

export const Virtual = () => {
  return (
    <>
    <section className='virtual-section'>

        <div className="row">
            <div className="content1">
                <h2 className="sub-heading">Virtual try-on</h2>
                <span>Never Buy the wrong Shade Again!</span>
                <div className='try'>
                    <span>try now</span>
                    <img src={shade} alt="" className='shade' />
                </div>
            </div>

            <div className="content2">
                <div className="wrapper">

                    <ReactCompareImage
                     leftImageCss={{width:"100%", height:"250px"}} 
                     rightImageCss={{width:"100%", height:"250px"}}
                     leftImage={Before} 
                     rightImage={After}></ReactCompareImage>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}
