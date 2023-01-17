import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Azure Services'} 
                        paragraph={'Consultative lead in process and requirements analysis and application configuration Track progress of deliverables and interface with customer towards implementing services on schedule and on budget'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Scripting Services'} 
                            paragraph={'As a scripting expert, I have a strong skill set in both PowerShell and Python. I have experience in automating various tasks and creating scripts to streamline processes. I am proficient in utilizing PowerShell cmdlets to manage and automate Windows environments, from basic to advanced tasks, such as managing Active Directory, Exchange, Office 365 and Azure.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'M365 Integrations'} 
                        paragraph={'M365 integration specialist, I am responsible for providing expert services to organizations looking to integrate Microsoft 365 into their existing IT infrastructure. I work with clients to understand their specific needs and tailor solutions to suit those needs. My services include the deployment, configuration, and management of M365 services such as Exchange Online, SharePoint, and Teams'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
