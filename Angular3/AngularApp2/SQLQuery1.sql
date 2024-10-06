CREATE TABLE subscription (
    subscriptionID INT NOT NULL PRIMARY KEY,
    subscriptionName NVARCHAR(150) NULL,
    subscriptionAmount NVARCHAR(MAX) NULL,
    subscriptionDescription NVARCHAR(MAX) NULL
);

INSERT INTO subscription (subscriptionID, subscriptionName, subscriptionAmount, subscriptionDescription)
VALUES
(1, 'Basic Plan', '9.99', 'Access to basic features'),
(2, 'Standard Plan', '19.99', 'Access to standard features and priority support'),
(3, 'Premium Plan', '29.99', 'Access to all features including premium support');



CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    UserName NVARCHAR(100) NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    Phone NVARCHAR(20),
    Address NVARCHAR(255),
    IsAdmin BIT DEFAULT 0,
    IsSupplier BIT DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE()
);


CREATE TABLE service_subscription (
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    userId INT NOT NULL,  -- Assuming every subscription must be associated with a user
    subscriptionId INT NOT NULL,  -- Assuming every subscription entry must reference a subscription
    startDate DATE NULL,  -- Adjust data type to DATETIME if time is also needed
    endDate DATE NULL,  -- Adjust data type to DATETIME if time is also needed
    subServiceID INT NOT NULL,  -- Assuming it must reference a subservice
    CONSTRAINT FK_ser_subscription_userId FOREIGN KEY (userId) REFERENCES Users(UserID),
    CONSTRAINT FK_ser_subscription_subscriptionId FOREIGN KEY (subscriptionId) REFERENCES subscription(subscriptionID),
    CONSTRAINT FK_ser_subscription_subServiceID FOREIGN KEY (subServiceID) REFERENCES subService(subServiceID)
);