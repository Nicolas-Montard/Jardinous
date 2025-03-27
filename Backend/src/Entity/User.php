<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    private ?int $id = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column]
    private ?bool $isAdmin = false;

    /**
     * @var Collection<int, OnLocate>
     */
    #[Groups(['user'])]
    #[ORM\OneToMany(targetEntity: OnLocate::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $onLocates;

    public function __construct()
    {
        $this->setCreatedAt(new \DateTimeImmutable());
        $this->onLocates = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        return ['ROLE_USER'];
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function isAdmin(): ?bool
    {
        return $this->isAdmin;
    }

    public function setIsAdmin(bool $isAdmin): static
    {
        $this->isAdmin = $isAdmin;

        return $this;
    }

    /**
     * @return Collection<int, OnLocate>
     */
    public function getOnLocates(): Collection
    {
        return $this->onLocates;
    }

    public function addOnLocate(OnLocate $onLocate): static
    {
        if (!$this->onLocates->contains($onLocate)) {
            $this->onLocates->add($onLocate);
            $onLocate->setUser($this);
        }

        return $this;
    }

    public function removeOnLocate(OnLocate $onLocate): static
    {
        if ($this->onLocates->removeElement($onLocate)) {
            // set the owning side to null (unless already changed)
            if ($onLocate->getUser() === $this) {
                $onLocate->setUser(null);
            }
        }

        return $this;
    }
}
