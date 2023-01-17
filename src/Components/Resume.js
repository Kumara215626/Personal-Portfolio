import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2022 - 2023'} 
                        title={'SCCM Adminsitrator'}
                        subTitle={'Ballarat Health'}
                        text={"SKILLS: Microsoft Endpoint Configuration Manager, PowerShell, Intune"}

                        />
                    <ResumeItem 
                        year={'2020 - 2022'} 
                        title={'M365 Administrator'}
                        subTitle={'Monash Health'}
                        text={"SKILLS: M365, PowerShell, Exchange, Azure, PowerApps, SharePoint"}
                        />
                    <ResumeItem 
                        year={'2019 - 2020'} 
                        title={'ICT Support Officer'}
                        subTitle={'Austin Health'}
                        text={'SKILLS: PowerShell, Active Directory, Python'}
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'L1 Service Desk'}
                        subTitle={'IBM'}
                        text={'SKILLS: Customer care, Problem Solving, Troubleshooting'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Masters of Telecommunication and Networking'}
                        subTitle={'La Trobe University'}
                        text={''}
                    />
                    <ResumeItem 
                        year={'2013 - 2017'} 
                        title={'Bachelors of  Communications Engineering'}
                        subTitle={'KL University'}
                        text={''}
                        />
                    <ResumeItem 
                        year={'2011 - 2013'} 
                        title={'High School Graduation'}
                        subTitle={'Narayana Jr College'}
                        text={''}
                        />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
