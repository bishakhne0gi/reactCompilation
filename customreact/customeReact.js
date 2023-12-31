



// a -----> link (google)




const reactElement =
{
    //type
    type: 'a',
    //properties
    props:
    {
        href: "https://google.com",
        target: '_blank'
    },
    //children
    children: 'Click on Me'
}

const mainContainer = document.querySelector('#root');


//customRender(inject reactElement, into mainContainer)
customRender(reactElement, mainContainer)



//fuction of customRender
function customRender(reactElement, container) {


    /*

    Brute Force way

    const domElement = document.createElement(reactElement.type);


    domElement.innerHTML = reactElement.children;

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);

    */


    //Optimised Way

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {

        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);

    }

    container.appendChild(domElement)



}

