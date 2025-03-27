<?php

namespace App\Entity;

use App\Repository\OnLocateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: OnLocateRepository::class)]
class OnLocate
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    private ?int $id = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $endAt = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(length: 255)]
    private ?string $localisation = null;

    /**
     * @var Collection<int, Tool>
     */
    #[Groups(['onLocate'])]
    #[ORM\ManyToMany(targetEntity: Tool::class, inversedBy: 'onLocates')]
    private Collection $tools;

    #[Groups(['onLocate'])]
    #[ORM\ManyToOne(inversedBy: 'onLocates')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function __construct()
    {
        $this->tools = new ArrayCollection();
        $this->setCreatedAt(new \DateTimeImmutable());
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getEndAt(): ?\DateTimeInterface
    {
        return $this->endAt;
    }

    public function setEndAt(?\DateTimeInterface $endAt): static
    {
        $this->endAt = $endAt;

        return $this;
    }

    public function getLocalisation(): ?string
    {
        return $this->localisation;
    }

    public function setLocalisation(string $localisation): static
    {
        $this->localisation = $localisation;

        return $this;
    }

    /**
     * @return Collection<int, Tool>
     */
    public function getTools(): Collection
    {
        return $this->tools;
    }

    public function addTool(Tool $tool): static
    {
        if (!$this->tools->contains($tool)) {
            $this->tools->add($tool);
        }

        return $this;
    }

    public function removeTool(Tool $tool): static
    {
        $this->tools->removeElement($tool);

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
