const e = React.createElement;

function LikeButton() {
    // Display a "Like" <button>
    return e(
        'button', {
            onClick: () => alert('berhasil')
        },
        'Like'
    );
}

// ... the starter code you pasted ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);