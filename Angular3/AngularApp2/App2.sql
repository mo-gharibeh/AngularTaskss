CREATE DATABASE ServiceDB;
GO

USE ServiceDB;
GO

-- Create Service Table
CREATE TABLE Service (
    serviceID INT PRIMARY KEY IDENTITY(1,1),
    ServiceName NVARCHAR(50)  NULL,
    ServiceDescription NVARCHAR(500) NULL,
    ServiceImage NVARCHAR(MAX) NULL
);

-- Create subService Table
CREATE TABLE subService (
    subServiceID INT PRIMARY KEY IDENTITY(1,1),
    SubServiceName NVARCHAR(50)  NULL,
    SubServiceDescription NVARCHAR(500) NULL,
    SubServiceImage NVARCHAR(MAX) NULL,
    serviceID INT NOT NULL,
    CONSTRAINT FK_Service_SubService FOREIGN KEY (serviceID) REFERENCES Service(serviceID)
);

-- Insert data into Service table
INSERT INTO Service (ServiceName, ServiceDescription, ServiceImage)
VALUES 
('Web Development', 'Development of dynamic websites and web applications', 'webdev.jpg'),
('Mobile App Development', 'Building native and cross-platform mobile applications', 'mobileapp.jpg'),
('Graphic Design', 'Professional design services for branding, UI/UX, etc.', 'graphicdesign.jpg');

-- Insert data into subService table (Ensure the serviceID values match the inserted Service rows)
INSERT INTO subService (SubServiceName, SubServiceDescription, SubServiceImage, serviceID)
VALUES 
('Front-end Development', 'Building the client-side part of web applications using HTML, CSS, and JavaScript', 'frontend.jpg', 1),
('Back-end Development', 'Server-side logic and database management', 'backend.jpg', 1),
('iOS Development', 'Native app development for iOS devices', 'iosdev.jpg', 2),
('Android Development', 'Native app development for Android devices', 'androiddev.jpg', 2),
('Logo Design', 'Designing logos for branding', 'logodesign.jpg', 3),
('UI/UX Design', 'Creating user interfaces and improving user experience', 'uiuxdesign.jpg', 3);
