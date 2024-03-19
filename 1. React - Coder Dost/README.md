<h1>NOTES (React Master Class - Coder Dost)</h1>

<h2 style="color: #416D19;">Concepts</h2>

1. React Setup, React DOM, Project Structure
   - **Project Structure:** Structure of project using create-react-app
2. Component, Props, JSX
3. Conditional rendering, Ternary operators, maps
   - **Ternary Operators:** condition ? valueIfTrue : valueIfFalse
4. Events, Event handler, Synthetic Event Object
   - **Synthetic Event Object:** Defult object returned by event handlers having follwing properties (onChange, onClick, e.target.value, e.preventDefault())
5. State, useState hook
6. Forms, Event Objects, lifting state up, controlled/uncontrolled input
   - **Lifting State:**
        - Passing the states [state, setState], via inside another function, as props to chldren components. As in not letting setState leave the parent component
        - Lifting state up involves passing state values and modifying functions as props from parent to child components.
        - Passing setState directly as a prop lets the child component modify the parent's state directly.
        - It's like letting a child directly change the parent's stuff, which is not how things usually work in React.
        - Though it works, it's not the usual way React components interact.

    - **controlled/uncontrolled input:**
        - Unontrolled input: Value being changed somewhere else
        - Controlled input: Vlue being changes within input

7. CRUD operations, useEffect hook
8. useReducers for State management
   - **useReducer:** instead of redux as redux isnt built in with react
9. Context API , useContext hook
10. Context API with useReducers, Custom hooks
11. useRef hook
12. useEffect hook detailed, API calls
13. useMemo, useCallback, memo
14. Advanced React 1 - forwardRef,useDeferred, useTransistion etc
15. Advanced React 2 - Lazy loading, flushSync, createPortal etc
