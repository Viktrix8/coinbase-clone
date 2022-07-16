import { useState } from 'react';
import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';
import CoinSelector from './CoinSelector';
import Transfer from './Transfer';
import Receive from './Receive';

function TransferModal({sanityTokens, thirdWebTokens, walletAddress}) {
    const [action, setAction] = useState('send')
    const [selectedToken, setSelectedToken] = useState(sanityTokens[1])

    const selectedStyle = {
        color: "#3773f5"
    }

    const unselectedStyle = {
        border: '1px solid #282b2f'
    }

    const selectedModal = (option) => {
        switch (option) {
            case "send":
                return <Transfer 
                selectedToken={selectedToken}
                setAction={setAction}
                thirdWebTokens={thirdWebTokens}
                walletAddress={walletAddress}
                 />
            case "receive":
                return <Receive 
                    walletAddress={walletAddress}
                    setAction={setAction}
                    selectedToken={selectedToken}
                />

            case 'select':
                return <CoinSelector
                selectedToken={selectedToken}
                setSelectedToken={setSelectedToken}
                setAction={setAction}
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens}
                walletAddress={walletAddress}
                />

            case "transfering":
                return <div style={{ display: 'flex', fontSize: '1.5rem', flexDirection: 'column',width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                     <h2 style={{color: "#3773f5"}}>Transfer in progress...</h2>
                     <TailSpin 
                     height='100'
                     width='100'
                     color='grey'
                     ariaLabel='loading'
                     />
                </div>

            case 'transferred':
                return (
                    <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: "#27ad75", textAlign: "center"}}>
                        <h2 style={{color: 'lightgreen'}}>Transfer Completed</h2>
                    </div>
                )

            case "failed":
                return (
                    <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: "#ff0038", textAlign: "center"}}>
                        <h2 style={{color: 'lightgreen'}}>Transfer Completed</h2>
                    </div>
                )

            default:
                return <h2>send</h2>
        }
    }

    return (
        <Wrapper>
            <Selector>

                <Option style={action === 'send' ? selectedStyle : unselectedStyle} onClick={() => setAction("send")} >
                    <p>Send</p>
                </Option>

                <Option style={action === 'receive' ? selectedStyle : unselectedStyle} onClick={() => setAction("receive")}>
                    <p>Receive</p>
                </Option>

            </Selector>
            <ModalMain>
                {selectedModal(action)}
            </ModalMain>
        </Wrapper >
    );
}

export default TransferModal;

const Wrapper = styled.div`
    height: 35rem;
    width: 27rem;
    color: white;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
`

const ModalMain = styled.div`
        padding: 1rem;
        flex: 1;
`

const Option = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        background-color: #111214;
    }
`
