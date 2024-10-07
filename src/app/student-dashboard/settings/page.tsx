"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import Form from "@/components/Form";
import Input from "@/components/Input";
import SaveButton from "@/components/SaveButton";
import ProfileIcon from "@/components/ProfileIcon";
import styled from "styled-components";
import DashboardSection from "@/components/DashboardSection";

const SettingsPage = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
				<ProfileIcon>👤</ProfileIcon>
				<Link href="/student-dashboard">
					<SidebarItem>Student Dashboard</SidebarItem>
				</Link>
				<Link href="/student-dashboard/progress">
					<SidebarItem>Progress</SidebarItem>
				</Link>
				<Link href="/student-dashboard/result">
					<SidebarItem>Result</SidebarItem>
				</Link>
				<Link href="/student-dashboard/settings">
					<SidebarItem>Settings</SidebarItem>
				</Link>
				<Link href="/login">
					<SidebarItem>Log Out</SidebarItem>
				</Link>
			</Sidebar>
			<MainContent>
				<DashboardSection>
					<SectionTitle>GENERAL SETTING</SectionTitle>
					<PageSpecificForm className="page-specific-form">
						<Input type="text" placeholder="FULL NAME" />
						<Input type="email" placeholder="EMAIL ADDRESS" />
						<Input type="text" placeholder="PROGRAM" />
						<Input type="text" placeholder="LEVEL" />
						<Input type="text" placeholder="SEMESTER" />
						<Input type="tel" placeholder="PHONE NUMBER" />
						<ButtonContainer>
							<SaveButton>SAVE</SaveButton>
							<CancelButton>CANCEL</CancelButton>
						</ButtonContainer>
					</PageSpecificForm>
				</DashboardSection>
			</MainContent>
		</Container>
	);
};

export default SettingsPage;

const Container = styled.div`
	margin-top: 40px;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	background-color: #b23;
	width: 98.2vw;
	@media (min-width: 768px) {
		margin-top: 90px;
		width: 98.2vw;
	}
`;

const PageSpecificForm = styled(Form)`
	margin-top: 0;
`;

const MainContent = styled.div`
	justify-content: center;
	margin: auto;
	margin-right: 20px;
	padding: 20px;
	padding-left: 0;
	width: 55%;

	@media (min-width: 768px) {
		margin-right: 30px;
		width: 78%;
	}
`;

const SectionTitle = styled.h2`
	margin-bottom: 10px;
	font-size: 20px;
	color: #2c3e50;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const CancelButton = styled.button`
	padding: 12px 24px;
	background-color: #ccc;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
`;
