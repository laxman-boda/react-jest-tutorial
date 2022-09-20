import  checkPropTypes  from "check-prop-types";

export const findByTestArr = (componet,attr) => {
    const wrapper = componet.find(`[data-test='${attr}']`);
    return wrapper
}

export const checkProps = (component,expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name)
    return propsErr
}