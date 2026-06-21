/**
 * LineMask
 *
 * Wraps any heading or text line in the mask/inner structure required
 * for the paralleluniverse-style line-reveal animation.
 *
 * DOM output:
 *   <div class="line-mask [maskClassName]">
 *     <div class="line-inner [innerClassName]">
 *       {children}
 *     </div>
 *   </div>
 *
 * GSAP targets ".line-inner" elements.
 * The mask (overflow:hidden) clips the inner as it slides up from 110%.
 *
 * Props:
 *   as          — the tag to render as the OUTER element (default "div")
 *   innerAs     — the tag to render as the INNER element (default "div")
 *   className   — classes on the outer mask div (forwarded alongside line-mask)
 *   innerClassName — classes on the inner text div (alongside line-inner)
 *   children    — the text / JSX content
 *   style       — optional inline style on the outer mask
 *   innerStyle  — optional inline style on the inner element
 */
const LineMask = ({
  as: Outer = "div",
  innerAs: Inner = "div",
  className = "",
  innerClassName = "",
  children,
  style,
  innerStyle,
  ...rest
}) => {
  return (
    <Outer
      className={`line-mask ${className}`}
      style={style}
      {...rest}
    >
      <Inner
        className={`line-inner ${innerClassName}`}
        style={innerStyle}
      >
        {children}
      </Inner>
    </Outer>
  );
};

export default LineMask;
