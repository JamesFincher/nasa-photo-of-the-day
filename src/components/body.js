import {StyledBody} from './theme/body.styled';

export default function Body(props) {
    const {imgSrc, explanation} = props;
    return (
        <StyledBody>
            <>
                <img
                    src={imgSrc}
                    alt={explanation}
                    className='image'
                    onClick={() => {
                        window.open(imgSrc);
                    }}
                />
                <p className='explanation'>{explanation}</p>
            </>
        </StyledBody>
    );
}
