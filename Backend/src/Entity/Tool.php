<?php

namespace App\Entity;

use App\Repository\ToolRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ToolRepository::class)]
class Tool
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    private ?int $id = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column]
    private ?int $priceByDay = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column]
    private ?int $stock = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[Groups(['tool', 'category', 'user', 'onLocate'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $picture = null;

    #[Groups(['tool'])]
    #[ORM\ManyToOne(inversedBy: 'tools')]
    private ?Category $category = null;

    /**
     * @var Collection<int, OnLocate>
     */
    #[Groups(['tool'])]
    #[ORM\ManyToMany(targetEntity: OnLocate::class, mappedBy: 'tools')]
    private Collection $onLocates;


    public function __construct()
    {
        $this->setCreatedAt(new \DateTime());
        $this->onLocates = new ArrayCollection();
    }

    /**
     * @return DateTimeInterface|null
     */

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getPriceByDay(): ?int
    {
        return $this->priceByDay;
    }

    public function setPriceByDay(int $priceByDay): static
    {
        $this->priceByDay = $priceByDay;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

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
            $onLocate->addTool($this);
        }

        return $this;
    }

    public function removeOnLocate(OnLocate $onLocate): static
    {
        if ($this->onLocates->removeElement($onLocate)) {
            $onLocate->removeTool($this);
        }

        return $this;
    }

}
