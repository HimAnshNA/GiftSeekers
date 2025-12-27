const slider =documen.queryselcor('.range-slider');
cosnt progress = slider.queryselector('.progress'); 
const minPriceInput =slider.qreuryselector('.min-price');
const maxPriceInput =slider.qreuryselector('.max-price');
const minInput =slider.qreuryselector('.min-input');
const maxInput =slider.qreuryselector('.max-input');

const updateProgress =()=>{

    const minValue =parseInt(minInput.value);
        const maxValue =parseInt(maxInput.value);

        const range = maxInput.max -minInput.min;

        const valueRange = maxValue-minValue;

        const minOffset = ((minValue - minInput.min)/range)*100

const width = valueRange/range*100;

progress.style.width=width+"%";
progress.style.left=minOffset+"%";

minPriceInput.value = minValue;
maxPriceInput.value = maxValue;


};

const updateRange = (event)=>{

    const input = event.target;
    let min = parseInt(minPriceInput.value);
    let max = parseInt(maxPriceInput.value);

    if(input === minPriceInput&&max>min){
        max = min;
        maxPriceInput.value =max;
    }else if(input === maxPriceInput && max<min){
        min = max;

        minPriceInput.value = min;

    }


    minInput.value = min;
    maxInput.value = max;

    updateProgress();
}

minPriceInput.addeventlistener('input',updateRange);
maxPriceInput.addeventlistener('input',updateRange);



 minInput.addeventlistener("input",()=>{
    if (parseInt(minInput.value) >= parseInt(maxInput.value))
        {maxInput.value = minInput.value}
    updateProgress()
}) ;
 maxInput.addeventlistener("input",()=>{
    if (parseInt(maxInput.value) <= parseInt(minInput.value))
        {maxInput.value = minInput.value;

        }
        updateProgress()
}) ;

updateProgress()