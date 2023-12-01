import Preact from 'preact'

const GridLines = () => {

}

interface BitonicSortProps {
  numElements: number
}

interface Coord {
  x: number, 
  y: number
}

const getNumSteps = (numElements: number) => {
  const n = Math.log2(numElements);
  return (n * (n + 1)) / 2;
};

const getNumPaddingSections = (steps: number) => {
  let sum = 0;
  // Padding of spaces in between the step areas
  sum += steps - 2;
  let nextSwapSpan = 2;
  let highestSwapSpan = 2;
  for (let i = 0; i < steps; i++) {
    const paddingInStep = nextSwapSpan / 2 + 1;
    console.log(paddingInStep);
    // Invocation span 2 padding 2
    // Invocation span 4 padding 3
    // Invocation span 8 padding 5
    // Invocation span 16 padding 9
    sum += paddingInStep;
    nextSwapSpan /= 2;
    if (nextSwapSpan === 1) {
      nextSwapSpan = highestSwapSpan * 2;
      highestSwapSpan = nextSwapSpan;
    }
  }
  return sum;
}

const BitonicSort = ({numElements}: BitonicSortProps) => {
  const gridStart = {x: 31.906, y: 22.775}
  const gridEnd = {x: 31.906, y: 142.225}

  const gridStartCoords: Coord[] = [];

  const subdivideSpan = (startY: number, endY: number, subdivisions: number, index: number): number => {
    let span = endY - startY;
    let step = span / subdivisions;
    let points = [];
    return startY + (index * step);
  }

  const gridDistance = gridEnd.y - gridStart.y;
  for (let i = 0; i < numElements; i++) {
    gridStartCoords.push({
      x: gridStart.x,
      y: subdivideSpan(gridStart.y, gridEnd.y, numElements, i),
    })
  }

  const getStep = (startY: number, endY: number, subdivisions: number) => {
    return (endY - startY) / subdivisions;
  }

  const gridLineSingleStep = getStep(gridStart.y, gridEnd.y, 16);
  const stepInvocations = new Array(8).fill(0);
  const firstStepCenterX = 52.915;
  const lastStepCenterX = 504.588;
  const numSteps = getNumSteps(numElements);
  const divisionsBetweenCenters = numSteps - 2;
  console.log(getNumPaddingSections(numSteps));

  const paddingBetweenInvocationAndStepEdge = firstStepCenterX - 42.41;
  
  const stepBlocksX = [];
  stepBlocksX.push(firstStepCenterX);
  for (let i = 0; i < divisionsBetweenCenters; i++) {
    stepBlocksX.push(subdivideSpan(firstStepCenterX, lastStepCenterX, divisionsBetweenCenters, i));
  }
  stepBlocksX.push(lastStepCenterX);
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="547"
      height="158"
      fill="none"
      viewBox="0 0 547 158"
    >
      <g id="Bitonic_Sort" clipPath="url(#clip0_1_3)">
        <path fill="#fff" d="M0 0h547v158H0V0z"></path>
        <path id="Flip_Group_0_Highlight_Block_0"
          fill="#D2E4D8"
          d="M42.41 22.775h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_0_Highlight_Block_1"
          fill="#D2E4D8"
          d="M42.41 37.764h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_0_Highlight_Block_2" fill="#D2E4D8" d="M42.41 52.76h21.008v7.496H42.41v-7.497z"></path>
        <path id="Flip_Group_0_Highlight_Block_3"
          fill="#D2E4D8"
          d="M42.41 67.754h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_0_Highlight_Block_4"
          fill="#D2E4D8"
          d="M42.41 82.749h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_0_Highlight_Block_5"
          fill="#D2E4D8"
          d="M42.41 97.743h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_0_Highlight_Block_6"
          fill="#D2E4D8"
          d="M42.41 112.738h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_0_Highlight_Block_7"
          fill="#D2E4D8"
          d="M42.41 127.733h21.008v7.497H42.41v-7.497z"
        ></path>
        <path id="Flip_Group_1_Highlight_Block_0"
          fill="#D2E4D8"
          d="M73.924 22.775h31.512v22.491H73.924v-22.49z"
        ></path>
        <path id="Flip_Group_1_Highlight_Block_1"
          fill="#D2E4D8"
          d="M73.924 52.76h31.512v22.49H73.924V52.76z"
        ></path>
        <path id="Flip_Group_1_Highlight_Block_2"
          fill="#D2E4D8"
          d="M73.924 82.749h31.512v22.491H73.924V82.749z"
        ></path>
        <path id="Flip_Group_1_Highlight_Block_3"
          fill="#D2E4D8"
          d="M73.924 112.738h31.512v22.491H73.924v-22.491z"
        ></path>
        <path id="Flip_Group_3_Highlight_Block_0"
          fill="#D2E4D8"
          d="M147.448 22.775h52.52v52.479h-52.52V22.775z"
        ></path>
        <path id="Flip_Group_3_Highlight_Block_1"
          fill="#D2E4D8"
          d="M147.448 82.749h52.52v52.478h-52.52V82.749z"
        ></path>
        <path id="Flip_Group_6_Highlight_Block_0" fill="#D2E4D8" d="M284 22.775h94.533V135.23H284V22.775z"></path>
        <g id="Disperse_Block_Group" fill="#F3EDDD">
          <path d="M115.943 22.775h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M115.943 52.76h21.007v7.496h-21.007v-7.497z"></path>
          <path d="M115.943 67.754h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M115.943 82.749h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M115.943 97.743h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M115.943 112.738h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M115.943 127.733h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M210.476 52.76h31.512v22.49h-31.512V52.76z"></path>
          <path d="M210.476 82.749h31.512v22.491h-31.512V82.749z"></path>
          <path d="M210.476 112.738h31.512v22.491h-31.512v-22.491z"></path>
          <path d="M210.476 22.775h31.512v22.491h-31.512v-22.49z"></path>
          <path d="M389.038 22.775h52.519v52.479h-52.519V22.775z"></path>
          <path d="M389.038 82.749h52.519v52.478h-52.519V82.749z"></path>
          <path d="M452.065 22.775h31.512v22.491h-31.512v-22.49z"></path>
          <path d="M452.065 52.76h31.512v22.49h-31.512V52.76z"></path>
          <path d="M452.065 82.749h31.512v22.491h-31.512V82.749z"></path>
          <path d="M452.065 112.738h31.512v22.491h-31.512v-22.491z"></path>
          <path d="M494.083 22.775h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M494.083 37.764h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M494.083 52.76h21.008v7.496h-21.008v-7.497z"></path>
          <path d="M494.083 67.754h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M494.083 82.749h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M494.083 97.743h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M494.083 112.738h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M494.083 127.733h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M115.943 37.764h21.007v7.497h-21.007v-7.497z"></path>
          <path d="M252.494 22.775h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M252.494 37.764h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M252.494 52.76h21.008v7.496h-21.008v-7.497z"></path>
          <path d="M252.494 67.754h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M252.494 82.749h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M252.494 97.743h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M252.494 112.738h21.008v7.497h-21.008v-7.497z"></path>
          <path d="M252.494 127.733h21.008v7.497h-21.008v-7.497z"></path>
        </g>
        <g id="Invocation_Grid_Group">
          {gridStartCoords.map((gridLine, index) => {
            const drawback = `H31.906z`;
            const d = `M${gridLine.x} ${gridLine.y}h493.683`;
            return (
              <g id={`Element_Grid_Line_${index}`}>
                <path fill="#D2E4D8" d={d + drawback}></path>
                <path 
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeWidth="0.1"
                  d={d}
                >
                </path>
              </g>   
            )
          })}
        </g>
        <g id="Invocation_Step_Group">
          {stepBlocksX.map((stepArea, stepIndex) => {
            return (
              <g id={`Invocation_Step_${stepIndex}`}>
                {stepInvocations.map((invocation, index) => {
                  console.log(gridStartCoords[index *2].y);
                  const d = `M${stepArea} ${gridStartCoords[index * 2].y}v${gridLineSingleStep}z`
                  return (
                    <g id={`Step_${stepIndex}_Invocation_${index}`}>
                      <path 
                        fill="#D2E4D8" d={d}/>
                      <path
                        stroke="#000"
                        strokeLinejoin="round"
                        strokeWidth="0.1"
                        d={d}/>
                    </g>
                  );
                })}
              </g>
            )
          })}
          {stepInvocations.map((invocation, index) => {
            console.log(gridStartCoords[index *2].y);
            const d = `M52.915 ${gridStartCoords[index * 2].y}v${gridLineSingleStep}z`
            return (
              <g id={`Swap_0_Invocation_${index}`}>
                <path 
                  fill="#D2E4D8" d={d}/>
                <path
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeWidth="0.1"
                  d={d}/>
              </g>
            );
          })}
          <g id="Swap_1_Invocation_0">
            <path fill="#D2E4D8" d="M84.429 23v22.446z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M84.429 23v22.446"
            ></path>
          </g>
          <g id="Swap_1_Invocation_1">
            <path fill="#D2E4D8" d="M84.429 52.924V75.37z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M84.429 52.924V75.37"
            ></path>
          </g>
          <g id="Swap_1_Invocation_2">
            <path fill="#D2E4D8" d="M84.429 82.853V105.3z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M84.429 82.853V105.3"
            ></path>
          </g>
          <g id="Swap_1_Invocation_3">
            <path fill="#D2E4D8" d="M84.429 112.783v22.446z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M84.429 112.783v22.446"
            ></path>
          </g>
          <g id="Swap_1_Invocation_4">
            <path fill="#D2E4D8" d="M94.925 30.482v7.482z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M94.925 30.482v7.482"
            ></path>
          </g>
          <g id="Swap_1_Invocation_5">
            <path fill="#D2E4D8" d="M94.925 60.406v7.482z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M94.925 60.406v7.482"
            ></path>
          </g>
          <g id="Swap_1_Invocation_6">
            <path fill="#D2E4D8" d="M94.925 90.336v7.482z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M94.925 90.336v7.482"
            ></path>
          </g>
          <g id="Swap_1_Invocation_7">
            <path fill="#D2E4D8" d="M94.925 120.265v7.482z"></path>
            <path
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="0.1"
              d="M94.925 120.265v7.482"
            ></path>
          </g>
          <g>
            <g>
              <path fill="#D2E4D8" d="M126.447 23v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 23v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 37.965v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 37.965v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 52.924v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 52.924v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 67.889v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 67.889v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 82.853v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 82.853v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 97.818v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 97.818v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 112.783v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 112.783v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M126.447 127.748v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M126.447 127.748v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M157.953 23v52.373z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M157.953 23v52.373"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M157.953 82.853v52.374z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M157.953 82.853v52.374"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M168.457 30.482v37.41z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M168.457 30.482v37.41"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M178.962 37.965V60.41z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M178.962 37.965V60.41"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M189.467 45.441v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M189.467 45.441v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M168.457 90.336v37.41z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M168.457 90.336v37.41"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M178.962 97.818v22.446z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M178.962 97.818v22.446"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M189.467 105.301v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M189.467 105.301v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M220.98 23v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M220.98 23v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M231.485 30.482v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M231.485 30.482v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M220.98 52.924v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M220.98 52.924v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M231.485 60.406V75.37z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M231.485 60.406V75.37"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M220.98 82.853v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M220.98 82.853v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M231.485 90.336V105.3z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M231.485 90.336V105.3"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M220.98 112.783v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M220.98 112.783v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M231.485 120.265v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M231.485 120.265v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 23v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 23v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 37.965v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 37.965v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 52.924v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 52.924v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 67.889v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 67.889v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 82.853v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 82.853v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 97.818v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 97.818v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 112.783v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 112.783v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M262.999 127.748v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M262.999 127.748v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M294.504 23v112.23z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M294.504 23v112.23"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M305.009 127.748V30.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M305.009 127.748V30.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M315.514 37.965v82.3z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M315.514 37.965v82.3"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M326.018 112.783V45.447z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M326.018 112.783V45.447"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M336.523 52.924v52.373z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M336.523 52.924v52.373"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M347.027 97.818v-37.41z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M347.027 97.818v-37.41"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M357.532 67.889v22.445z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M357.532 67.889v22.445"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M368.036 75.371v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M368.036 75.371v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M462.57 23v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M462.57 23v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M473.074 30.482v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M473.074 30.482v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M462.57 52.924v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M462.57 52.924v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M473.074 60.406V75.37z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M473.074 60.406V75.37"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M462.57 82.853v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M462.57 82.853v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M473.074 90.336V105.3z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M473.074 90.336V105.3"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M462.57 112.783v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M462.57 112.783v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M473.074 120.265v14.964z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M473.074 120.265v14.964"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 23v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 23v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 37.965v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 37.965v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 52.924v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 52.924v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 67.889v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 67.889v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 82.853v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 82.853v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 97.818v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 97.818v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 112.783v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 112.783v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M504.588 127.748v7.482z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M504.588 127.748v7.482"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M399.542 23v29.928z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M399.542 23v29.928"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M410.047 30.482V60.41z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M410.047 30.482V60.41"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M420.551 37.965v29.928z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M420.551 37.965v29.928"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M431.056 45.441V75.37z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M431.056 45.441V75.37"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M399.542 82.853v29.928z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M399.542 82.853v29.928"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M410.047 90.336v29.928z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M410.047 90.336v29.928"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M420.551 97.818v29.928z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M420.551 97.818v29.928"
              ></path>
            </g>
            <g>
              <path fill="#D2E4D8" d="M431.056 105.301v29.928z"></path>
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M431.056 105.301v29.928"
              ></path>
            </g>
          </g>
        </g>
        <g fill="#000">
          {gridStartCoords.map((gridLine, index) => {
            const drawback = `H31.906z`;
            const d = `M${gridLine.x - 2} ${gridLine.y}h493.683`;
            return (
              <text x={Math.floor(gridLine.x) - 7} y={Math.floor(gridLine.y + 2)} font-family="Arial" font-size="4" fill="black">{index}</text>
            )
          })}
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <path fill="#fff" d="M0 0H547V158H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BitonicSort;