<?php

namespace App\Controller;


use App\Entity\Tool;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

final class ToolController extends AbstractController
{
    #[Route('/tool', name: 'app_tool', methods: ['POST'])]
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

}
