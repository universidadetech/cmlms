"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      // Simular uma resposta bem-sucedida da Stripe
      const response = await axios.post(`/api/simulate-stripe-response`, {
        courseId,
      });
      if (response.data.success) {
        toast.success("Enrollment successful");
        // Redirecionar ou atualizar a página conforme necessário
      } else {
        toast.error("Enrollment failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      onClick={onClick}
      className="w-full md:w-auto"
      size="sm"
    >
      {price > 0 ? `Enroll for ${formatPrice(price)}` : "Enroll for Free"}
    </Button>
  );
};
