<?php

namespace App\Controller;


use App\Entity\Tool;
use App\Repository\CategoryRepository;
use App\Repository\ToolRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;



final class ToolController extends AbstractController
{
    #[Route('/tool', name: 'new_tool', methods: ['POST'])]
    public function new(Request $request, SerializerInterface $serializer, CategoryRepository $categoryRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $tool = $serializer->deserialize(
            $request->getContent(),
            Tool::class,
            'json',
        );

        $category = $categoryRepository->find($data['categoryId']);

        $tool->setCategory($category);

        $entityManager->persist($tool);
        $entityManager->flush();

        return $this->json($tool, 200, [], ['groups' => 'tool']);
    }
    #[Route('/tool', name: 'get_all_tool', methods: ['GET'])]
    public function getAll(ToolRepository $toolRepository): JsonResponse
    {
        $tools = $toolRepository->findAll();
        return $this->json($tools, 200, [], ['groups' => 'tool']);
    }
    #[Route('/tool/{id}', name: 'get_one_tool', methods: ['GET'])]
    public function getOneById(Tool $tool): JsonResponse
    {
        return $this->json($tool, 200, [], ['groups' => 'tool']);
    }
    public function newTool(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (!isset($data['title'])) {
            return new JsonResponse(['error' => 'Titre manquant'], 400);
        }

        $tool = new Tool();
        $tool->setTitle($data['title']);
        $tool->setPriceByDay($data['priceByDay'] ?? 0);
        $tool->setDescription($data['description'] ?? '');
        $tool->setStock($data['stock'] ?? 0);
        $tool->setPicture($data['picture'] ?? '');

        $em->persist($tool);
        $em->flush();

        return new JsonResponse(['status' => 'outil créé'], 201);
    }
}
