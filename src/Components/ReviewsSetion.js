import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Certifications'} span={'Certifications'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Microsoft 365 Certified: Enterprise Administrator Expert'} 
                    />
                    <ReviewItem 
                        text={'Microsoft 365 Certified: Teams Administrator Associate'} 
                    />
                    <ReviewItem 
                        text={'Microsoft Certified: Azure Developer Associate'} 
                    />
                    <ReviewItem 
                        text={'Microsoft Certified: Security, Compliance, and Identity Fundamentals'} 
                    />
                      <ReviewItem 
                        text={'Microsoft Certified: Power Platform Fundamentals'} 
                    />
                      <ReviewItem 
                        text={'Level 2 - Gladiator: Master Mimecast administration'} 
                    />
                    <ReviewItem 
                        text={'Cisco Certified Network Associate'} 
                    />
                    
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
        font-weight:700;
    }
`;

export default ReviewsSetion;
