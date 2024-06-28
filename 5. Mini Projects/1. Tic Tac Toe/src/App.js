import React, { useEffect, useState } from 'react'
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

const initalState = {
    marks: new Array(9).fill(null),
    player: 1,
    gameOver: false
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_PLAYER':
            return { ...state, player: action.payload }
        case 'SET_MARKS':
            return { ...state, marks: action.payload }
        case 'SET_GAMEOVER':
            return { ...state, gameOver: action.payload }
        default:
            return state;
    }


}
const store = createStore(reducer)
export default function App() {
    return (
        <div className='App'>
            <Provider store={store}>
                <BoardContainer></BoardContainer>
            </Provider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        marks: state.marks,
        player: state.player,
        gameOver: state.gameOver
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMarks: (marks) => {
            dispatch({ type: 'SET_MARKS', payload: marks })
        },
        setPlayer: (player) => {
            dispatch({ type: 'SET_PLAYER', payload: player })
        },
        setGameOver: (gameOver) => {
            dispatch({ type: 'SET_GAMEOVER', payload: gameOver })
        },
    }
}
const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);
function Board({ marks, setMarks, player, setPlayer, gameOver, setGameOver }) {
    // const [marks, setMarks] = useState(new Array(9).fill(null))
    // const [player, setPlayer] = useState(1)

    function changeMark(pos) {
        const marksCopy = [...marks]
        if (!marksCopy[pos]) {
            marksCopy[pos] = player == 1 ? 'cross' : 'dot'
            setMarks(marksCopy)
            setPlayer(player == 1 ? 2 : 1)
        }
        console.log(gameOver)
    }

    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]

    useEffect(() => {
        for (let [a, b, c] of combinations) {
            if (marks[a] == marks[b] && marks[b] == marks[c]) {
                if (marks[a] == 'cross') setGameOver(true)
                if (marks[a] == 'dot') setGameOver(true)
            }
        }
    }, [marks])

    useEffect(() => {
        if (gameOver) {
            setTimeout(() => {
                alert('Game Over')
                location.reload();
            }, 200)
        }
    }, [gameOver])
    return (
        <div className='Board'>
            <div>
                <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
                <Block mark={marks[1]} position={1} changeMark={changeMark}></Block>
                <Block mark={marks[2]} position={2} changeMark={changeMark}></Block>
            </div>
            <div>
                <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
                <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
                <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
            </div>
            <div>
                <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
                <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
                <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
            </div>
        </div>
    )
}

function Block({ mark, position, changeMark }) {
    return (
        <div
            className={`Block ${mark}`}
            onClick={() => changeMark(position)}
        >

        </div>
    )
}