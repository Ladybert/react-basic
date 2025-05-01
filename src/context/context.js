import React, { Component, createContext } from "react"

const RootContext = createContext()

// Provider
const Provider = RootContext.Provider
const GlobalProvider = (Childern) => {
    return(
        class ParentComp extends Component {
            state = {
                totalOrder: 0
              }
            
              dispatch = action => {
                if(action.type === 'PLUS_ORDER') {
                  return this.setState({
                      totalOrder: this.state.totalOrder + 1
                  })
                }
                if(action.type === 'MINUS_ORDER') {
                  return this.setState({
                      totalOrder: Math.max(0, this.state.totalOrder - 1)
                  })
                }
              }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Childern {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider

// Consumer
const Consumer = RootContext.Consumer
export const GlobalConsumer = (Childern) => {
    return(
        class ParentConsumer extends Component {
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Childern {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}