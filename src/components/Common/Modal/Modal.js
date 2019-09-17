import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class Modal extends Component {

	static propTypes = {
		children: PropTypes.element,
		title: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
		]),
		link: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
			PropTypes.array,
			PropTypes.element,
		]),
		isOpen: PropTypes.bool,
		toggleModal: PropTypes.func,
		modalSize: PropTypes.string,
		modalBgColor: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state={
			show: props.isOpen
		}
		
	}

	delayClass(element, clase) {
		setTimeout(function(){
			element.classList.add(clase);
		});
	}

	delayTime(callback, time){
		setTimeout(function(){
			callback();
		}, time);
	}
	

	componentDidMount() {
		const { title } = this.props,
			  { modal } = this.refs,
			  { show } = this.state;

		if(show){
            document.querySelector('body')
                .classList.add('modal-open');

			if(title){
				this.refs.active.classList.add('margin-elements');
			}

			this.delayTime(()=>{
				modal.classList.add('show');
			});
		}
	}

	componentDidUpdate() {
		const { show } = this.state,
			  { modal } = this.refs;


		if(show){
			document.querySelector('body')
				.classList.add('modal-open');
			this.delayTime(()=>{
				modal.classList.add('show');
			});
		} else {
			document.querySelector('body')
				.classList.remove('modal-open');
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			show: nextProps.isOpen
		});
	}

	componentWillUnmount() {
		document.querySelector('body')
			.classList.remove('modal-open');
	}

	close(e) {
		e.preventDefault();

		const { modal } = this.refs;
		const { show } = this.state;

		this.delayTime(()=>{
			modal.classList.add('hide');
		});

		this.delayTime(function(){
			if (this.props.toggleModal) {
                this.props.toggleModal()
			} else {
               this.handleToggle();
			}
		}.bind(this),500)

	}

	render() {
		return(
			<div>
				{ this.renderModal() }
				{ this.renderLink() }
			</div>
		);
	}

	renderModal() {
        const {
        	children,
			title,
			modalSize,
			modalBgColor
        } = this.props;

        const { show } = this.state;

        const addTitle = title ? (
			<div className="modal-header"  >
				<div className="modal-title">
                    {title}
				</div>
			</div>

        ) : null;

        return show ? (
			<div className="modal" ref="modal">
				<div className="modal-dialog">
					<div className={`modal-content ${modalSize}`} style={{
						backgroundColor: modalBgColor
					}}>
						<div className="modal-close">
							<a href="#" title="Close" onClick={this.close.bind(this)}>
								<span className="fas fa fa-times-circle"/>
							</a>
						</div>
						<div className="modal-elements" ref="active">
                            {addTitle}
							<div className="modal-body">
                                {children}
							</div>
						</div>
					</div>
				</div>
			</div>
        ) : null;

	}

	renderLink() {
		const { link } = this.props;

		return link ? (
			<span onClick={ (e) => this.handleToggle(e) }>
				{ link }
			</span>
		) : null;
	}

	handleToggle() {
		const { show } = this.state;
		this.setState({
			show: !show,
		});
	}
}
