<?php

namespace App\Controller;

use App\Entity\OnLocate;
use App\Repository\ToolRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

final class OrderController extends AbstractController
{
    #[Route('/order', name: 'app_order', methods: ['POST'])]
    public function index(Request $request, SerializerInterface $serializer, ToolRepository $toolRepository, EntityManagerInterface $entityManager, UserRepository $userRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $onLocate = $serializer->deserialize(
            $request->getContent(),
            OnLocate::class,
            'json',
        );
        $onLocate->setUser($userRepository->find($data['userId']));

        foreach ($data['toolsId'] as $toolId){
            $onLocate->addTool($toolRepository->find($toolId));
        }

        $entityManager->persist($onLocate);
        $entityManager->flush();

        return $this->json($onLocate, 200, [], ['groups' => 'onLocate']);
    }
}
