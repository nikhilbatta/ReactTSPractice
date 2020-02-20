import React, {useState} from 'react'
import addToStore from '../actions/index'
import { connect } from 'react-redux'
import addToScore from '../actions/index'
import store from '../store/index'
import {useSelector, useDispatch} from 'react-redux'
interface Props{
    teamOne: string,
    teamTwo: string,
    teamScore:number,
    score: number
}
 const Scoreboard: React.FC<Props> = (props) => {
     const counter = useSelector(state => state.score)
     const dispatch = useDispatch()
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch({type: "ADD_SCORE"})}> Increase Score</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {score: state.score}
}

export const ReduxScoreBoard = connect(mapStateToProps)(Scoreboard)

