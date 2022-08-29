export default function html([first,...string],...values){
    return values.reduce(function(acc,cur){
        return acc.concat(cur, string.shift())
        },
        [first])
        .filter(function(x){
            return x && x!==true || x===0;
        })
        .join('')
}


export function createStore(reducer){
    let state = reducer()
    const roots = new Map()

    function render(){
        for( const [root, component] of roots){
            const output = component()
            root.innerHTML = output
        }
        
    }

    return {
        attach(component,root){
            roots.set(root/**key */,component/**value */)
            //đây là root lên dùng phương thức set để gán key, value

            render()
        },

        connect(selector = (state) => state){
            return component => (props, ...agrs) => 
                component(Object.assign({}, props, selector(state), ...agrs))
                //Object.assign({}, props, selector(state), ...agrs) kiểu như
                //đẩy props, selector(state), ...agrs vào obj rỗng

        },

        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}