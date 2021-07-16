import { useRef, useLayoutEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  courtainContainer,
  scrollEffectAction,
} from "../../redux/reducers/count";
import { useEffect } from "react";

const Curtain01 = () => {
  const planeEl = useRef();
  const container = useRef();
  const dispatch = useDispatch();
  const { curtains, scroll } = useSelector((state) => state.count);

  const someRef = useRef({ scrollEffect: 0 });

  useLayoutEffect(() => {
    if (container.current && curtains.container) {
      curtains.setContainer(container.current);

      curtains
        .onContextLost(() => {
          curtains.restoreContex();
        })
        .onRender(() => {
          const newScriollEffect = curtains.lerp(
            someRef.current.scrollEffect,
            0,
            0.075
          );
          someRef.current.scrollEffect = newScriollEffect;
          dispatch({
            type: scrollEffectAction,
            payload: newScriollEffect,
          });
        })
        .onScroll(() => {
          const delta = curtains.getScrollDetas();
          delta.y = -delta.y;

          if (delta.y > 60) {
            delta.y = 60;
          } else if (delta.y < -60) {
            delta.y = -60;
          }

          const newScriollEffect = current.lerp(
            someRef.current.scrollEffect,
            delta.y * 1.5,
            0.5
          );
          someRef.current.scrollEffect = newScriollEffect;
          dispatch({
            type: scrollEffectAction,
            payload: newScriollEffect,
          });
        });

      dispatch({
        type: courtainContainer,
        payload: curtains.container,
      });
    }
    return () => {
      // curtains.dispose();
    };
  }, [container, curtains, dispatch]);

  useLayoutEffect(() => {
    // const curtains = count.curtains;
    if (curtains.container) {
      const planeParams = {
        vertexShader: vs,
        fragmentShader: fs,
        widthSegments: 40,
        heightSegments: 40,
        uniforms: {
          direction: {
            name: "uDirection",
            type: "1f",
            value: 0,
          },
          time: {
            name: "uTime",
            type: "1f",
            value: 0,
          },
        },
      };

      const plane = new Plane(curtains, planeEl.current, planeParams);

      plane.onRender(() => {
        plane.uniforms.time.value++;

        plane.uniforms.direction.value = someRef.current.scrollEffect / 500;
      });

      // remove plane if we're unmounting the component
      return () => {
        plane.remove();
      };
    }
  }, [curtains]);

  // const direction = index % 2 === 0 ? "direct" : "reverse";

  useEffect(() => {
    someRef.current.scrollEffect = scroll;
  }, [scroll]);

  return (
    <div className="Canvas" ref={container}>
      <div className="plane-container">
        <div className="Plane-image" ref={planeEl}>
          <img
            src="./flower1.png"
            alt="flower"
            data-sampler="planeTexture"
            crossOrigin="anooymous"
          />
          <img
            src="./flower2.png"
            alt="flower"
            data-sampler="planeTexture"
            crossOrigin="anooymous"
          />
          <img
            src="./flower3.png"
            alt="flower"
            data-sampler="planeTexture"
            crossOrigin="anooymous"
          />
        </div>
      </div>
    </div>
  );
};

export default Curtain01;
