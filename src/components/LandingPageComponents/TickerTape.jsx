import React from 'react'
import { useState, useEffect ,useRef,useCallback} from 'react';
import { data } from './Data'

const newsItems = [];




const Element = (props) => {
    const {title} = props;
    const tempArr = title.split(" ");
    return (
      <div className="element">
        <p>{tempArr[0]}<span className={`${Number(tempArr[1].substring(0,tempArr[1].length-1))>0?"text-green-500":"text-red-500"} ml-[0.5em]`}>{tempArr[1]}</span></p>
      </div>
    )
  }


const TickerTape = () => {
    const [items, setItems] = useState(newsItems);

    const fetchData = async()=>{
        let gainerArr = data.top_gainers.map((item) => {
            return {key:`${item.ticker} ${item.change_percentage}`}
        });
        let loserArr = data.top_losers.map((item) => {
            return {key:`${item.ticker} ${item.change_percentage}`}
        });
        let mergeArr = gainerArr.concat(loserArr);
        mergeArr.sort(() => Math.random() - 0.5);
    
        setItems(mergeArr);
    }

    useEffect(()=>{
        fetchData();
    },[]);
    const wrapperRef = useRef();
    const indexRef = useRef();

    const handleRefUpdate = useCallback(node => {
        if (node !== null && items.length > 0) {
            indexRef.current = node.firstChild;
            wrapperRef.current = node;
            document.documentElement.style.setProperty('--animationDistance', `${0 - indexRef.current.offsetWidth}px`);
            document.documentElement.style.setProperty('--animationDuration', `${Math.round(indexRef.current.offsetWidth / 33)}s`);
            wrapperRef.current.classList.add('moving');
        }
    }, [items]);

    const handleLoop = () => {
        wrapperRef.current.classList.remove('moving');
        wrapperRef.current.style.animation = 'none';
        const t = wrapperRef.current.offsetHeight; /* trigger reflow */
        wrapperRef.current.style.animation = null;
        shiftNext([...items]);
    };

    const shiftNext = (copy) => {
        const firstitem = copy.shift();
        copy.splice(copy.length, 0, firstitem);
        setItems(copy);
    };

    const handleAnimationEnd = () => {
        handleLoop();
    }
    return (
        <div>
            <div className='w-[100%] h-[2.7em] bg-white'>
                <div className="wrapper">
                    <div className="inner" ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
                        {items.map((obj, index) => <Element title={obj.key} key={obj.key + index} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TickerTape
