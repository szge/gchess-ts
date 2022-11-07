import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div id="top-part">
                <h1>Gravity Chess</h1>
            </div>
            <div id="game-body">
                <div id="letters">
                    <div className="letter">h</div>
                    <div className="letter">g</div>
                    <div className="letter">f</div>
                    <div className="letter">e</div>
                    <div className="letter">d</div>
                    <div className="letter">c</div>
                    <div className="letter">b</div>
                    <div className="letter">a</div>
                    <div id="flexor"></div>
                </div>
                <div id="container">
                    <div id="lefteron">
                        <div id="wrapper">
                            <div id="numbers">
                                <div className="number">1</div>
                                <div className="number">2</div>
                                <div className="number">3</div>
                                <div className="number">4</div>
                                <div className="number">5</div>
                                <div className="number">6</div>
                                <div className="number">7</div>
                                <div className="number">8</div>
                            </div>
                            <div id="canvas-wrapper">
                                <canvas width="800" height="800">
                                    An alternative text describing what your
                                    canvas displays.
                                </canvas>
                            </div>
                        </div>
                    </div>
                    <div id="righteron">
                        <p id="opening-name"></p>
                        {/* <button onclick="back()">Undo</button> */}
                        <button>Undo</button>
                        <br />
                        <br />
                        {/* <button onclick="globalGameState.setGravityStyle(parseInt(window.prompt('Which gravity style do you want?\n(101 - normal, 102 - ender, 103 - left, 104 - right, 105 - alt, 106 - hokey)', '101')))">
                    Set Gravity
                </button> */}
                        <button>Set Gravity</button>
                        <br />
                        <br />
                        {/* <button onclick="copyTextToClipboard(gameRecord);">Copy game</button> */}
                        <button>Copy game</button>
                        <br />
                        <br />
                        {/* <button onclick="copyTextToClipboard(getFEN());">Copy FEN</button> */}
                        <button>Copy FEN</button>
                        <br />
                        <div id="game-record-flex"></div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "none",
                }}
            >
                <img
                    id="white_rook"
                    src="chess_pieces/PNGs/no_shadow/128h/w_rook_png_128px.png"
                    width="116"
                    height="128"
                    alt="White Rook"
                />
                <img
                    id="white_bishop"
                    src="chess_pieces/PNGs/no_shadow/128h/w_bishop_png_128px.png"
                    width="127"
                    height="128"
                    alt="White Bishop"
                />
                <img
                    id="white_knight"
                    src="chess_pieces/PNGs/no_shadow/128h/w_knight_png_128px.png"
                    width="115"
                    height="128"
                    alt="White Knight"
                />
                <img
                    id="white_queen"
                    src="chess_pieces/PNGs/no_shadow/128h/w_queen_png_128px.png"
                    width="141"
                    height="128"
                    alt="White Queen"
                />
                <img
                    id="white_king"
                    src="chess_pieces/PNGs/no_shadow/128h/w_king_png_128px.png"
                    width="127"
                    height="128"
                    alt="White King"
                />
                <img
                    id="white_pawn"
                    src="chess_pieces/PNGs/no_shadow/128h/w_pawn_png_128px.png"
                    width="105"
                    height="128"
                    alt="White Pawn"
                />
                <img
                    id="black_rook"
                    src="chess_pieces/PNGs/no_shadow/128h/b_rook_png_128px.png"
                    width="116"
                    height="128"
                    alt="Black Rook"
                />
                <img
                    id="black_bishop"
                    src="chess_pieces/PNGs/no_shadow/128h/b_bishop_png_128px.png"
                    width="127"
                    height="128"
                    alt="Black Bishop"
                />
                <img
                    id="black_knight"
                    src="chess_pieces/PNGs/no_shadow/128h/b_knight_png_128px.png"
                    width="115"
                    height="128"
                    alt="Black Knight"
                />
                <img
                    id="black_queen"
                    src="chess_pieces/PNGs/no_shadow/128h/b_queen_png_128px.png"
                    width="141"
                    height="128"
                    alt="Black Queen"
                />
                <img
                    id="black_king"
                    src="chess_pieces/PNGs/no_shadow/128h/b_king_png_128px.png"
                    width="127"
                    height="128"
                    alt="Black King"
                />
                <img
                    id="black_pawn"
                    src="chess_pieces/PNGs/no_shadow/128h/b_pawn_png_128px.png"
                    width="105"
                    height="128"
                    alt="Black Pawn"
                />
            </div>

            <script src="lodash.js"></script>
            <script src="utils.js"></script>
            <script src="load.js"></script>
            <script src="game-base.js"></script>
            <script src="simple.js"></script>
        </div>
    );
}

export default App;
