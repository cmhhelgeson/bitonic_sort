import preactLogo from '../assets/preact.svg';
import './style.css';
import gsap from 'gsap';
import BitonicSort from '../../components/BitonicSort';

import {useRef, useState} from 'preact/hooks'
import {RefObject, createRef} from 'preact'
import { usePageContext } from '../../renderer/usePageContext';

const Resources = [
  {
    title: "Learn Preact",
		description: "If you're new to Preact, try the interactive tutorial to learn important concepts",
	  href: "https://preactjs.com/tutorial",
    id:"resource_0",
  },
  {
    title:"Differences to React",
		description:"If you're coming from React, you may want to check out our docs to see where Preact differs",
		href:"https://preactjs.com/guide/v10/differences-to-react",
    id:"resource_1"
  },
  {
	  title:"Learn Vite",
	  description:"To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation",
	  href:"https://vitejs.dev",
    id:"resource_2"
  }
]

export function Page() {
  const pageRef = createRef<HTMLDivElement>();
  const pageContext = usePageContext();

  const resourceRefs = Resources.map(() => createRef<HTMLAnchorElement>());
  const [hoverState, setHoverState] = useState({
    hovering: false,
    hoverIndex: 0,
  })

  const [numElements, setNumElements] = useState(16);

  const liftUp = (index: number) => {
    gsap.to(resourceRefs[index].current, {y: -10, duration: 0.3})
    if (index - 1 >= 0) {
      gsap.to(resourceRefs[index - 1].current, {y: -5, duration: 0.3})
    }
    if (index + 1 < Resources.length) {
      gsap.to(resourceRefs[index + 1].current, {y: -5, duration: 0.3})
    }
  }

  const resetLift = () => {
    resourceRefs.forEach((res) => {
      gsap.to(res.current, {y: 0, duration: 0.3});
    })
  }

  const pullDown = () => {
    gsap.to(pageRef.current, {y: 100, duration: 1.0})
  }


	return (
		<div ref={pageRef}>
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Get Started building Vite-powered Preact Apps </h1>
      <button onClick={() => setNumElements(numElements + 1)}>Test</button>
			<section>
        {Resources.map((res, index) => {
          return (
            <a onClick={() => {
              pullDown();
            }}
              href={res.href} onMouseEnter={() => liftUp(index)} target="_blank" class="resource" id={res.id} ref={resourceRefs[index]} onMouseLeave={resetLift}>
			        <h2>{res.title}</h2>
			        <p>{res.description}</p>
		        </a>
          )
        })}
			</section>
      <BitonicSort numElements={numElements}/>
		</div>
	);
}
