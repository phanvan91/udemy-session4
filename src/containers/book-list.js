import React from 'react'
import {connect} from 'react-redux'
import {selectBook} from "../actions";
import {bindActionCreators} from 'redux'
class BookList extends React.Component {

    renderList () {
        return this.props.books.map((book,index) => {
            return (
                <li
                    key={index}
                    onClick={()=>this.props.selectBook(book)}
                    className={'list-group-item'}>
                    {book.title}
                    </li>
            )
        })
    }

    render () {
        return (
            <ul className={'list-group col-sm-4'}>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        books : state.books,
        activeBook : state.activeBook
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        selectBook : selectBook
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)