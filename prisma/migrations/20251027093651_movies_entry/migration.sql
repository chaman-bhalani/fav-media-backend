-- CreateTable
CREATE TABLE `Entry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `type` ENUM('MOVIE', 'TV_SHOW') NOT NULL,
    `director` VARCHAR(191) NULL,
    `budget` DECIMAL(18, 2) NULL,
    `location` VARCHAR(191) NULL,
    `duration` INTEGER NULL,
    `yearTime` VARCHAR(191) NULL,
    `notes` VARCHAR(191) NULL,
    `posterUrl` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
