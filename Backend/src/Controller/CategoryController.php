<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

final class CategoryController extends AbstractController
{
    #[Route('/category', name: 'new_category', methods: ['POST'])]
    public function new(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager): JsonResponse
    {
        $category = $serializer->deserialize(
            $request->getContent(),
            Category::class,
            'json',
        );

        $entityManager->persist($category);
        $entityManager->flush();

        return $this->json($category, 200, [], ['groups' => 'category']);
    }
    #[Route('/category', name: 'get_all_category', methods: ['GET'])]
    public function getAll(CategoryRepository $categoryRepository): JsonResponse
    {
        $categories = $categoryRepository->findAll();
        return $this->json($categories, 200, [], ['groups' => 'category']);
    }
}
