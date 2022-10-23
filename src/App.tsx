import React from 'react';
import TruncateCell from './components/truncateCell';
import './App.css';

function App() {
    return (
        <div className="App">
            <div style={{ width: '100%' }}>
                { new Array(1000).fill(1).map(el => {
                    return (
                        <>
                            <TruncateCell
                                key={el}
                                children={'feature/create-new-text-ellipsis-component-TC2018.02'}
                                tailLength={5}
                                title={'feature/create-new-text-ellipsis-component-TC2018.02'}
                                className={'toto'}
                            />
                            <TruncateCell
                                key={el}
                                tailLength={5}
                                title={'feature/create'}
                                className={'toto'}
                            >
                                feature/create
                            </TruncateCell>
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
