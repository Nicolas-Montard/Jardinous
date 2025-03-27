<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250327105225 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE on_locate (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', end_at DATETIME DEFAULT NULL, localisation VARCHAR(255) NOT NULL, INDEX IDX_7768E6EA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE on_locate_tool (on_locate_id INT NOT NULL, tool_id INT NOT NULL, INDEX IDX_496FC4CB386E42D1 (on_locate_id), INDEX IDX_496FC4CB8F7B22CC (tool_id), PRIMARY KEY(on_locate_id, tool_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', is_admin TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE on_locate ADD CONSTRAINT FK_7768E6EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE on_locate_tool ADD CONSTRAINT FK_496FC4CB386E42D1 FOREIGN KEY (on_locate_id) REFERENCES on_locate (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE on_locate_tool ADD CONSTRAINT FK_496FC4CB8F7B22CC FOREIGN KEY (tool_id) REFERENCES tool (id) ON DELETE CASCADE
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE on_locate DROP FOREIGN KEY FK_7768E6EA76ED395
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE on_locate_tool DROP FOREIGN KEY FK_496FC4CB386E42D1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE on_locate_tool DROP FOREIGN KEY FK_496FC4CB8F7B22CC
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE on_locate
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE on_locate_tool
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE user
        SQL);
    }
}
